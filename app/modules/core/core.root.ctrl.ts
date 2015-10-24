"use strict";
/** Root Controller */
class RootCtrl {
  /** Controller Name */
  static IID: string = "RootCtrl";
  /** Controller Dependencies */
  static $inject: Array<string> = [];
  /** Hello world */
  hello: string;

  constructor() {
    var vm: RootCtrl = this;
    vm.hello = "Hello World";

  }

}
angular.module("app").controller(RootCtrl.IID, RootCtrl);
