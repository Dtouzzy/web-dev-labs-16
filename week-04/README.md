GROUP 21

| No. | Name                         | Registration Number |
|------|------------------------------|---------------------|
| 1    | Brayton Roger Kimaro         | 30696/T.2023        |
| 2    | Denisi Sambila Mgusi         | 30689/T.2023        |
| 3    | Daud Felix Paulo             | 31722/T.2023        |
| 4    | Gidion Juma Makandaiga       | 31262/T.2023        |
| 5    | Ester Lazaro Msabila         | 31786/T.2023        |
| 6    | Melkizedeck Godwin Otorael   | 30201/T.2023        |
| 7    | Erickson Emil Ntangwa        | 31784/T.2023        |

OBJECTIVES
1.Understand the Box Model — To learn how content, padding, border, and margin work together to control the size and spacing of elements.

2.Apply CSS Positioning — Demonstrating the differences between static, relative, absolute, fixed, and sticky positioning and how each affects page flow.

3.Manipulate Layout Using Float — Use of float and clear properties to create multi-column layouts and control how elements interact with surrounding content.

4.Build an Integrated Layout — Combining all three CSS concepts into a single functional page without using Flexbox or Grid.

5.Expose Layout Errors — Intentionally observe how misapplied CSS concepts such as missing clear or incorrect positioning break the layout.

6.Develop Debugging Skills — Identify and correct visual layout issues through inspection since CSS does not produce error messages.


Challenges Encountered in CSS Layout Development

1.Box Model Sizing 
Miscalculating element dimensions when padding and borders unexpectedly increase the total size of an element.

2.Positioning Dependencies
Absolute positioning only works correctly when a positioned parent exists; missing this causes elements to anchor to the wrong container.

3.Fixed Header Overlap 
A fixed header covers page content unless the body is manually offset with matching padding.

4.Sticky Positioning Failure
The sticky navigation silently breaks when a parent element has overflow restrictions applied.

5.Float Parent Collapse
Floated columns cause their parent container to lose height, disrupting the overall page structure.

6.Footer Misplacement 
Without clear: both, the footer shifts behind floated columns instead of appearing below them.

7.Silent CSS Failures
Unlike programming languages, CSS produces no error messages; all mistakes are identified through visual inspection only.

8.Specificity Conflicts 
Styles fail to apply when competing selectors override them unintentionally.

9.File Linking Errors
An incorrect path between the HTML and CSS files results in a completely unstyled page.
