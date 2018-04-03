type FuncType<T1 extends string, T2 extends number, T3 extends number> = 
    <T4 extends string>(arg: T4) => Output<T1, T2, T3, T4>;

// compare to
interface FuncInterface<T1 extends string, T2 extends number, T3> { 
    <T4 extends string>(arg: T4): Output<T1, T2, T3, T4>
}

const funcVar = <T1 extends string, T2 extends number, T3 extends number>(a: T1) => a;

type StillTooLong<T1 extends string, T2 extends number, T3 extends number> =
<T4 extends string, T5 extends string>(arg: T4, arg2: T5) => Output<T1, T2, T3, T4, T5, T6>;

const funcVarTooLong = <T1 extends string, T2 extends number, T3 extends number>(a: T1) => a.toString().trim();