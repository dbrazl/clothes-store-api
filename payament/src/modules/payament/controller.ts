import { type Request, type Response  } from 'express'
import { HTTP_STATUS } from '../../config/HttpStatus';
import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';

class PayamentController {
  async health(request: Request, response: Response) {
    return response.status(HTTP_STATUS.OK).json({
      status: 'on'
    });
  }

  async store(request: Request, response: Response) {
    try {
      mercadopago.configure({
        access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN ?? ''
      });

      const preference: CreatePreferencePayload = {
        items: request.body.items
      };

      const preferences = await mercadopago.preferences.create(preference);
      return response.status(HTTP_STATUS.OK).json({
        preferenceId: preferences.body.id
      });
    } catch (error) {
      return response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(error);
    }

  }
}

export default new PayamentController();
