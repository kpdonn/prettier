// https://github.com/prettier/prettier/issues/4171
function y() {

  const fits = <Immutable.Map<string, any>>fits();
  const fitsObjLiteral = <Immutable.Map<string, any>>{ a: "test" };
  const fitsArrayLiteral = <Immutable.Map<string, any>>["test", "test2"]

  const breakAfterCast = <Immutable.Map<string, any>>someExistingConfigMap.mergeDeep(fallbackOpts);

  const stillTooLong = <Immutable.Map<string, boolean, number, object, null, undefined, any, void, never>>someExistingConfigMap.mergeDeep(fallbackOptions);

  const testObjLiteral = <Immutable.Map<string, any>>{ property1: "myPropertyVal" };

  const testObjLiteral2 = <Immutable.Map<string, any, number, boolean, object, null>>{ property1: "myPropertyVal" };

  const testArrayLiteral = <Immutable.Map<string, any>>["first", "second", "third"];

  const testArrayLiteral2 = <Immutable.Map<string, any, number, boolean, object, null>>["first", "second", "third"];

  const insideFuncCall = myFunc(param1, <Immutable.Map<string, any>>param2, param3)
}

// https://github.com/prettier/prettier/issues/4168
function x() {
  const fits = <PermissionsChecker<any> | undefined>(<any>permissions)[type];
  const fitsObjLiteral = <PermissionsChecker<any> | undefined>{ a: "test" };
  const fitsArrayLiteral = <PermissionsChecker<any> | undefined>["t1", "t2"];

  const breakAfterCast = <PermissionsChecker<any> | undefined>(<any>permissions)[receiverType];

  const stillTooLong = <PermissionsChecker<object> | undefined | number | string | boolean>(<any>permissions)[receiverType];

  const testObjLiteral =  <PermissionsChecker<any> | undefined>{ prop1: "myPropVal" };

  const testObjLiteral2 = <PermissionsChecker<object> | undefined | number | string | boolean>{ prop1: "myPropVal" };

  const testArrayLiteral = <PermissionsChecker<any> | undefined>["first", "second", "third"];

  const testArrayLiteral2 = <PermissionsChecker<object> | undefined | number | string | boolean>["first", "second", "third"];

  const insideFuncCall = myFunc(param1, <PermissionsChecker<any> | undefined>param2, param3)
}