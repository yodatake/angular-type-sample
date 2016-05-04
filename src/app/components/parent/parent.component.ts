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
  public status: StatusObj = new StatusObj();

  constructor(moment: moment.MomentStatic) {
  }

  toggleHide() {
    this.status.hide = (!this.status.hide);
    this.status = this.status;
  }

  $onInit(): void {
    this.childlen.push(new Child('Yoda', 30));
    this.childlen.push(new Child('Kaori', 29));
  }
}

export class StatusObj {

  public hide: boolean;

  constructor() {
    this.hide = false;
  }

}
