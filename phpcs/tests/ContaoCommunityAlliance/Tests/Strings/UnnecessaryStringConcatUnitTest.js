var x = 'My ' + 'string';
var x = 'My ' + 1234;
var x = 'My ' + y + ' test';

this.errors['test'] = x;
this.errors['test' + 10] = x;
this.errors['test' + y] = x;
this.errors['test' + 'blah'] = x;
this.errors[y] = x;
this.errors[y + z] = x;
this.errors[y + z + 'My' + 'String'] = x;

this.errors['String'] = 'lllllllllllllooooooong' +
                        'with continuation on the next line.';

this.errors['String'] =  'short' + ' which' + 'is' + 'not' + 'needed';

this.errors['String'] =  'short' +
                         ' which is not needed' + ' here';
