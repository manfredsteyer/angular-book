import { trigger, style, transition, animate, state, keyframes, group, sequence, animateChild, query } from '@angular/animations';

export const ANIMATIONS: Array<any> = [

    // trigger, state und transition
    trigger('select', [
        state('yes', style({
            'background-color': 'orange'
        })),
        state('no', style({
            'background-color': 'lightsteelblue'
        })),
        state('*', style({
            'background-color': 'lightgrey'
        })),
        state('void', style({
            'background-color': 'white'
        })),

        transition('* => *', animate(500))
    ]),

    // Berechnete Werte
    // true und false nutzen
    // Animationsarten
    trigger('hover', [
        /*
        state('0', style({
            'height': '*'
        })),
        state('1', style({
            'height': '340px'
        })),
        transition('1 => 0', animate('0.5s ease-in-out')),
        transition('0 => 1', animate('0.5s 150ms cubic-bezier(0.07, 0.82, 0.16, 1)')),

        // Ab Angular 4.2.0 müssen gleichzeitge Kind-Animationen im Parent extra ausgelöst werden.
        transition('1 => 0', group([
            query('@button', animateChild()),
            animate('0.5s ease-in-out'),
        ])),
        transition('0 => 1', group([
            query('@button', animateChild()),
            animate('0.5s 150ms cubic-bezier(0.07, 0.82, 0.16, 1)')
        ]))
        */
    ]),

    // Nutzung von style in transition und animate
    // Einsatz von alias :enter und :leave mit ngIf
    trigger('button', [
        transition(':enter', [
            style({'opacity': 0}),
            animate(500,
                style({
                    'opacity': 1
                })
            )
        ]),
        transition(':leave',
            animate(500,
                style({
                    'opacity': 0
                })
            )
        )
    ]),

    // sequence
    // keyframe
    // group
    trigger('specialAnimation', [
        /*
        transition(':enter',
            [
                style({'opacity': 0.9, 'margin-top': '0px', 'margin-left': '0px'}),
                animate('900ms cubic-bezier(0.215, 0.610, 0.355, 1.000)', keyframes([
                        style({transform: 'translate3d(0,0,0)', offset: 0}),
                        style({transform: 'translate3d(0,0,0)', offset: 0.2}),
                        style({transform: 'translate3d(0,-30px,0)', offset: 0.4}),
                        style({transform: 'translate3d(0,-30px,0)', offset: 0.43}),
                        style({transform: 'translate3d(0,0,0)', offset: 0.53}),
                        style({transform: 'translate3d(0,-15px,0)', offset: 0.7}),
                        style({transform: 'translate3d(0,0,0)', offset: 0.8}),
                        style({transform: 'translate3d(0,-15px,0)', offset: 0.9}),
                        style({transform: 'translate3d(0,0,0)', offset: 1})
                    ])
                ),
                group([
                    animate('0.5s ease-out', style({
                        'margin-top': '10px'
                    })),
                    animate('0.3s 0.2s ease-in', style({
                        'margin-left': '10px'
                    })),
                    sequence([
                        animate('1s', style({
                            'opacity': '0.2'
                        })),
                        animate('1s', style({
                            'opacity': '1'
                        }))
                        // Weitere Verschachtelung
                        // group([
                        //
                        // ])
                    ])
                ]),
                animate('0.5s', style({
                    'margin-top': '0px',
                    'margin-left': '0px'
                }))
            ]
        )
        */
    ])

];
