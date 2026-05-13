type CardButtonProps = { onClick: () =&gt; void; children: JSX.Element };

type CardProps = {
  title: string;
  buttonText: string;
  onClick: () =&gt; void;
};



CardButtonProps&gt;;
CardTitleProps&gt;;
CardContainerProps&gt;;

CardProps&gt;;

ScreenContainerProps&gt;;

ScreenProps&gt;;

type HeadlessCardComponents = {
  Button: ComponentType&lt;CardButtonProps&gt;;
  Title: ComponentType&lt;CardTitleProps&gt;;
  Container: ComponentType&lt;CardContainerProps&gt;;
};

type HeadlessScreenComponent = {
  Container: ComponentType&lt;ScreenContainerProps&gt;;
  Card: ComponenType&lt;CardProps&gt;;
};

CardProps;

type HeadlessScreenProps = HeadlessScreenProps &amp;ScreenProps;

HeadlessCardComponents&gt;;
type HeadlessCardProps = HeadlessCardComponents &
  CardProps &amp;{ overrides: HeadlessCardOverrides };

type HeadlessScreenOverrides = {
  Container?: ComponentType&lt;ScreenContainerProps&gt;;
  Card?:
    | ComponentType&lt;CardProps&gt
    | {
      Button?: ComponentType&lt;CardButtonProps&gt;;
      Title?: ComponentType&lt;CardTitleProps&gt;;
      Container?: ComponentType&lt;CardContainerProps&gt;;
    };
};

export type ComponentOverrides&lt;
  Components extends Record&lt;string, any&gt;,
  ComponentsOverrides extends Partial&lt;Record&lt;keyof Components, any&gt;&gt; = Record&lt;
    keyof Components,
    undefined
  &gt;,
&gt; = {
  [Key in keyof Components]?:
    | Components[Key]
    | (unknown extends ComponentsOverrides[Key]
        ? undefined
        : ComponentsOverrides[Key]);
};
