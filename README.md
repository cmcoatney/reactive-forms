# Resources

## GOTCHA: Form Arrays in Stepper Forms

- [Form Array Errors](https://dontpaniclabs.com/blog/post/2022/01/05/how-to-use-angular-formarrays-within-formgroups-in-reactive-forms/)

Form array binding issues resolved with technique from article. The basic issue has to do with typesafety and versions. Some tutorials will demonstrate techniques that will cause errors in some situations. The answer was not intuitive:

> Binding to [formGroupName] with index as its name was the answer. (Step 3)
