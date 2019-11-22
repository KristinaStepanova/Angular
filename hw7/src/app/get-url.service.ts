import { Observable } from 'rxjs';

export class GetUrlService {
    images: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

    public dataSource: Observable<string> = Observable.create((emitter) =>{
        setInterval(() => {
            emitter.next(this.images[Math.floor(Math.random() * 4)]);
        }, 6000)
    })
}