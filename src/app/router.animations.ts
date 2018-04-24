import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', opacity: 1 }), { optional: true }),
        group([
            query(':enter', [
                style({ opacity: 0 }),
                animate('1000ms ease-in-out', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('1000ms ease-in-out', style({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
])