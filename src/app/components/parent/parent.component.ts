import { Child } from '../child/child.component';

/** @ngInject */
export function parent(): angular.IComponentOptions {
  return {
    templateUrl: 'app/components/parent/parent.html',
    controller: ParentController,
    bindings: {
      title: '@?'
    }
  };

}

/** @ngInject */
export class ParentController {
  public childlen: Array<Child> = new Array<Child>();

  constructor(moment: moment.MomentStatic) {
  }

  $onInit(): void {
    this.childlen.push(new Child('Yoda', 30));
    this.childlen.push(new Child('Kaori', 29));
  }
}
