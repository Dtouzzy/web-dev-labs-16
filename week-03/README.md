GROUP 21
| No. | Name                       | Registration Number |
| --- | -------------------------- | ------------------- |
| 1   | Brayton Roger Kimaro       | 30696/T.2023        |
| 2   | Denisi Sambila Mgusi       | 30689/T.2023        |
| 3   | Daud Felix Paulo           | 31722/T.2023        |
| 4   | Gidion Juma Makandaiga     | 31262/T.2023        |
| 5   | Ester Lazaro Msabila       | 31786/T.2023        |
| 6   | Melkizedeck Godwin Otorael | 30201/T.2023        |
| 7   | Erickson Emil Ntangwa      | 31784/T.2023        |

OBJECTIVES;
1. Apply all 3 CSS methods — inline, internal, external
2. Build a structured HTML page with 5 sections (header, nav, about, skills, daily routine)
3. Use external CSS for background color and typography
4. Use internal CSS for navigation and headings
5. Use inline CSS on fewer than 5 elements
7. Demonstrate 6 selector types — element, class, ID, group, descendant, pseudo-class

CHALLENGES FACED DURING PRACTICAL SESSION;
1. Using All Three CSS Methods Together
Understanding when to use inline vs internal vs external CSS is confusing at first. Keeping them organized without one overriding the other (specificity conflicts) is a common struggle.

2. CSS Specificity Conflicts
When inline, internal, and external styles all target the same element, the browser picks one based on specificity rules. For example, inline styles override external ones, which can cause unexpected results.

3. Anchor Links in Navigation
Getting the href="#sectionID" to correctly jump to the right section requires matching IDs exactly. A typo means the link does nothing.
4. Descendant Selector Precision
Writing nav ul li a correctly without breaking when the HTML structure changes slightly. Many students accidentally style the wrong elements or nothing at all.

5. Pseudo-class :hover Not Working
Forgetting to link the external CSS file properly (<link rel="stylesheet">) means hover effects silently fail with no error shown.

6. Image Placement in About Section
Getting the image to sit neatly beside the paragraph without breaking the layout, especially without knowing Flexbox yet.
