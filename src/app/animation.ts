import { trigger, sequence, state, animate, transition, style, query, stagger } from '@angular/animations'

export const collectionInOut = trigger('collectionInOut', [
  transition('* <=> *', [
    query(':leave', [
      stagger('10ms', [
        animate('0.1s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 0, transform: 'translate(0, 20px)' }))
      ]),

    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0, transform: 'translate(0, 20px)' }),
      stagger('50ms', [
        animate('0.4s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translate(0, 0)' })),
      ])
    ], { optional: true, limit: 50 }),
  ])
]);
