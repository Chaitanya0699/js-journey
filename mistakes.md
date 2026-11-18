# 🐛 Mistakes & Bug Log

> *"Reading this every Sunday is the best revision you can do."*

Every time you hit a bug, syntax error, unexpected output, or confusing behavior, log it here.

---

## Entry Template

```markdown
### [YYYY-MM-DD] Topic / Context
- **The Bug / Error:** What happened or what error message appeared?
- **What Caused It:** Why did JavaScript do this? (The root cause)
- **The Fix & Lesson:** How did you fix it, and what rule will you remember next time?
```

---

## Weekly Revision Tracker

- [ ] Week 1 Sunday Review
- [ ] Week 2 Sunday Review
- [ ] Week 3 Sunday Review
- [ ] Week 4 Sunday Review

---

## Logged Mistakes

### Example (For Reference)
- **Date:** 2026-11-16
- **Topic:** Variables (`const` vs `let`)
- **The Bug / Error:** `TypeError: Assignment to constant variable.`
- **What Caused It:** Attempted to reassign a value to a identifier declared with `const`.
- **The Fix & Lesson:** Use `let` if the value needs to change later, or keep `const` and avoid reassigning.

<!-- Add your new entries below -->

### 2026-11-16: Working with Variables
1. **Double Declaration**: Never declare a variable with `let` twice in the same scope (`SyntaxError`).
2. **String Quotes**: Values that are text must be in quotes `"..."`, or JS thinks it's a variable name (`ReferenceError`).
3. **Function Syntax**: Calling a function like `alert()` requires parentheses `()`.
4. **Assignment Direction**: Data flows from right to left (`target = source`), not left to right.
5. **Naming Variables**: Always use camelCase for variable names (e.g., `visitorName`, `totalScore`).

### 2026-11-17: Interaction,typeconversion,Operators

1. mainly in operators confused where + using this operators attaches strings 
if we start with string the whole operation attaches as a string 
if string is last and if we have any other numerical operations they get numerical operation and last it converts to string 

typeof (Null) returns object 


### 2026-11-18: Comparisons
here i missed was numbers in form of string converison
"2" > "12" i thought it was false 
later learnt that it compares as a string so it goes one by one letter 
in the first step it compares "2" > "1" its true and stops there 
if the first comparison was equal it goes to next letter in the string 
and another thing was 
undifined == null was true i assumed it but got clarity now its a special js rule that equals each other under ==
and got clarity on === it compares types not values 
null comaprion also got clarity now null never converts to 0 