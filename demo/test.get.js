describe('Array', function() {
  describe('#indexOf()', function() {
    it('should read jwtToken from localStorage',function() {
      var token = localStorage.getItem('jwtToken');
      expect(token).to.not.equal(null);
    });
   
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(5)).to.equal(-1);
    });
  });
});

describe('Test DB', function() {
  this.timeout(10000);
  var token = null;
  beforeEach(function() {
    token = JSON.parse(localStorage.getItem('jwtToken'));
  });

  var tests = [
    {args: 'obec/students_care'},
    {args: 'obec/student_data_db'},
    {args: 'obec/student_data'},
  ];

  tests.forEach(function(test) {
    it('should get /data from '+test.args,function(done) {
      $.ajax({
        url:'https://maas.nuqlis.com:8000/v2/'+test.args+'/data',
        headers:{'Authorization':'JWT '+token.token},
        dataType:'json'
      }).done(function(data) {
        expect(data).to.be.an('array').that.is.not.empty;
        done();
      });
    });
  });
   
});
