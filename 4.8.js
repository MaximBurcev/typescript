"use strict";
// interface IPayment {
//     sum: number;
//     from: number;
//     to: null;
// }
// interface IPaymentRequest extends IPayment {}
// enum PaymentStatus {
//     Success = "success",
//     Failed = "failed"
// }
// interface IDataSuccess extends IPayment  {
//     databaseId: number;
// }
// interface IDataFailed {
//     errorMessage: string;
//     errorCode: number;
// }
// interface IResponse {
//     status: PaymentStatus,
//     data: IDataSuccess | IDataFailed
// }
// interface IResponseSuccess {
//     status: PaymentStatus.Success,
//     data: IDataSuccess
// }
// interface IResponseFailed {
//     status: PaymentStatus.Failed,
//     data: IDataFailed
// }
// function get():IResponseSuccess|IResponseFailed {
//     return {
//         "status": "failed" as PaymentStatus.Failed,
//         "data": {
//            "errorMessage": "Недостаточно средств",
//            "errorCode": 4
//         }
//      };
// }
