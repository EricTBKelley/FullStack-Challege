import { Time } from '@angular/common';
import { EUser } from './EUser';

export class UEvent{

    eventId: number;
    eventTitle: string;
    eventLocation: string;
    eventDate: Date;
    eventTime: Time;
    eventCreator: EUser;
}