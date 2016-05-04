import {StatusObj} from "../parent/parent.component";

/** @ngInject */
export function child(): angular.IComponentOptions {
  return {
    templateUrl: 'app/components/child/child.html',
    controller: ChildController,
    bindings: {
      'child': '<',
      'status': '<'
    }
  };

}

/** @ngInject */
export class ChildController {

  public child: Child;
  public status: StatusObj;

  constructor() {
  }

  $onInit(): void {
  }

  $onChanges(changesObj: any): void {
    // if (changesObj.status) {
    //   alert(this.status.hide);
    // }
  }

  $doCheck() {
    alert(this.status);
  }

}

export class Child {
  constructor(public name: string, public age: number) {
  }
}
