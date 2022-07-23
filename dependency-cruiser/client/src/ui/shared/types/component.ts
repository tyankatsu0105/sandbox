/**
 * https://github.com/kripod/react-polymorphic-types/blob/0da9a47f15359f34143e4583c763a0d6b74b2a92/index.d.ts
 */

import * as React from "react";

type Merge<T, U> = Omit<T, keyof U> & U;

type PropsWithComponent<P, T extends React.ElementType> = P & { component?: T };

export type PolymorphicPropsWithoutRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithoutRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithoutRef<T>,
  PropsWithComponent<P, T>
>;

export type PolymorphicPropsWithRef<P, T extends React.ElementType> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithRef<T>,
  PropsWithComponent<P, T>
>;

type PolymorphicExoticComponent<
  P = {},
  T extends React.ElementType = React.ElementType
> = Merge<
  React.ExoticComponent<P & { [key: string]: unknown }>,
  {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    <InstanceT extends React.ElementType = T>(
      props: PolymorphicPropsWithRef<P, InstanceT>
    ): React.ReactElement | null;
  }
>;

export type PolymorphicForwardRefExoticComponent<
  P,
  T extends React.ElementType
> = Merge<
  React.ForwardRefExoticComponent<P & { [key: string]: unknown }>,
  PolymorphicExoticComponent<P, T>
>;

export type PolymorphicMemoExoticComponent<
  P,
  T extends React.ElementType
> = Merge<
  React.MemoExoticComponent<React.ComponentType<any>>,
  PolymorphicExoticComponent<P, T>
>;

export type PolymorphicLazyExoticComponent<
  P,
  T extends React.ElementType
> = Merge<
  React.LazyExoticComponent<React.ComponentType<any>>,
  PolymorphicExoticComponent<P, T>
>;

/**
 * Styled Compnentsのasが`undefined`か`React.ComponentType<any>`しか受け付けないので、型エラーを無くすために利用
 *
 * TODO: この関数を使わずにStyled Componentsのas propsに型エラー無く`component`propsを渡せるようにしたい
 * @example
 * const {children, component, ...restProps} = prpos
 *
 * <StyledComponent {...restProps} as={componentToAs(component)}>{children}</StyledComponent>
 */
export const componentToAs = (component: unknown): any => component;
