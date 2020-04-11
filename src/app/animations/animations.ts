import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";

export const routerAnimations = trigger('routerAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'})
      , { optional: true}),
    query(':enter .anim', style( {'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}), {optional: true}),
    group( [
      query(':enter', [
        style( {'transform': 'translateX(100%)'}),
        animate('0.5s 1s cubic-bezier(0.76, 0, 0.24, 1)', style({'transform': 'translateX(0)'}))
      ], { optional: true}),
      query(':leave', [
        style( {'transform': 'translateX(0)', position: 'absolute'}),
        animate('0.5s 1s cubic-bezier(0.76, 0, 0.24, 1)', style({'transform': 'translateX(-100%)'}))
      ], { optional: true}),
      query(':enter .anim', stagger(200, [
        style({'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}),
        animate('.6s 1.5s cubic-bezier(0.76, 0, 0.24, 1)', style({'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}))
      ]), {optional: true}),
      query(':leave .anim', stagger(200, [
        style({'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)'}),
        animate('.6s cubic-bezier(0.76, 0, 0.24, 1)', style({'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)'}))
      ]), {optional: true})
    ])
  ])
]);
