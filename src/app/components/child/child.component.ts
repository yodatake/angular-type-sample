/** @ngInject */
export function child(): angular.IComponentOptions {
  return {
    templateUrl: 'app/components/child/child.html',
    controller: ChildController,
    bindings: {
      'child': '<'
    }
  };

}

/** @ngInject */
export class ChildController {

  public child: Child;

    constructor() {
  }

  $onInit(): void {
    alert(this.child.name);
  }

}

export class Child {
  constructor(public name: string, public age: number) {
  }
}
