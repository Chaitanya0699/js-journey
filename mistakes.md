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
