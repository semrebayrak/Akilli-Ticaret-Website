import { getServiceErrorMessage, handleServiceResult } from './helper';
import { getService } from './index'

export const _getAllProducts = () => new Promise((resolve, reject) => {
  
    getService('/Product/ListProducts').then(response => {
     
        const _handleServiceResult = handleServiceResult(response);
      
        if (_handleServiceResult.success) {
            const data = { data: response.data, pagination: { totalDataCount: response.totalDataCount } };
            resolve(data);
        } else {
            reject(getServiceErrorMessage(response));
        }
    }).catch(error => {
        reject(getServiceErrorMessage(error.response));
    })

  
});


