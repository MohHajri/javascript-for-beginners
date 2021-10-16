
let a = [1,2,3,5,1,9];
/*   function containsDuplicates(a) {     */

    for (let i = 0; i < a.length; i++) {
      if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
        return true;
      }
    }
    return false;
  