<code>type CardButtonProps = { onClick: () =&gt; void; children: JSX.Element };,</code>
<code>type CardTitleProps = { children: JSX.Element };,</code>
<code>type CardContainerProps = { children: JSX.Element };,</code>

<code>type CardProps = {,</code>
<code>  title: string;,</code>
<code>  buttonText: string;,</code>
<code>  onClick: () =&gt; void;,</code>
<code>};,</code>

<code>type ScreenContainerProps = { children: JSX.Element };,</code>

<code>type ScreenProps = {,</code>
<code>  containerProps: ScreenContainerProps;,</code>
<code>  cardProps: CardProps;,</code>
<code>};,</code>

<code>const CardButton: ComponentType&lt;CardButtonProps&gt;;,</code>
<code>const CardTitle: ComponentType&lt;CardTitleProps&gt;;,</code>
<code>const CardContainer: ComponentType&lt;CardContainerProps&gt;;,</code>

<code>const Card: ComponentType&lt;CardProps&gt;;,</code>

<code>type HeadlessCardComponents = {,</code>
<code>  Button: ComponentType&lt;CardButtonProps&gt;;,</code>
<code>  Title: ComponentType&lt;CardTitleProps&gt;;,</code>
<code>  Container: ComponentType&lt;CardContainerProps&gt;;,</code>
<code>};,</code>

<code>type HeadlessScreenComponent = {,</code>
<code>  Container: ComponentType&lt;ScreenContainerProps&gt;;,</code>
<code>  Card: ComponenType&lt;CardProps&gt;;,</code>
<code>};,</code>

<code>type HeadlessCardProps = HeadlessCardComponents &amp;CardProps;,</code>

<code>type HeadlessScreenProps = HeadlessScreenProps &amp;ScreenProps;,</code>

<code>type HeadlessCardOverrides = Partial&lt;HeadlessCardComponents&gt;;,</code>
<code>type HeadlessCardProps = HeadlessCardComponents &,</code>
<code>  CardProps &amp;{ overrides: HeadlessCardOverrides };,</code>

<code>type HeadlessScreeOverrides = {,</code>
<code>  Container: ComponentType&lt;ScreenContainerProps&gt;;,</code>
<code>  Card: ComponentType&lt;ScreenCardProps&gt; | HeadlessCardOverrides;,</code>
<code>};,</code>

<code>export type ComponentOverrides&lt;,</code>
<code>  Components extends Record&lt;string, any&gt;,,</code>
<code>  ComponentsOverrides extends Partial&lt;Record&lt;keyof Components, any&gt;&gt; = Record&lt;,</code>
<code>    keyof Components,,</code>
<code>    undefined,</code>
<code>  &gt;,,</code>
<code>&gt; = {,</code>
<code>  [Key in keyof Components]?:,</code>
<code>    | Components[Key],</code>
<code>    | (unknown extends ComponentsOverrides[Key],</code>
<code>        ? undefined,</code>
<code>        : ComponentsOverrides[Key]);,</code>
<code>};,</code>
