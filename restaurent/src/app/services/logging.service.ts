
/**
 * service is just a normal typescript class 
 * no need any kind of  decorater 
 */
export class LoggingService {

    logStatusChange(status:string){
        console.log(`A server status changed ,new status: ${status}`)
    }
}