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
    {args: 'cores/user_db'},
    {args: 'cores/role_db'},
    {args: 'cores/authen_db'},
    {args: 'obec/CCT_CHECKDATA_60_1_CONFIRMED'},
    {args: 'obec/CCT_CHECKDATA_60_1_NO_CONFIRMED'},
    {args: 'obec/CCT_CHECKDATA_60_1_NoScreen'},
    {args: 'obec/CCT_CHECKDATA_60_1_RESULT'},
    {args: 'obec/CCT_CHECKDATA_60_1_RESULTP4M3_PER_AREA'},
    {args: 'obec/CCT_CHECKDATA_60_1_RESULT_PER_AREA'},
    {args: 'obec/announcement'},
    {args: 'obec/cct_record_db'},
    {args: 'obec/classteacher'},
    {args: 'obec/form_record_homevisit'},
    {args: 'obec/form_record_new'},
    {args: 'obec/form_template'},
    {args: 'obec/healthcare'},
    {args: 'obec/homevisit_record'},
    {args: 'obec/hostattendsummary'},
    {args: 'obec/hostclassroom'},
    {args: 'obec/hostclassroom_data'},
    {args: 'obec/hostsummary'},
    {args: 'obec/morning'},
    {args: 'obec/morning_attendance'},
    {args: 'obec/morningdetail'},
    {args: 'obec/mr_studentcare_report'},
    {args: 'obec/obec_grade'},
    {args: 'obec/obec_students'},
    {args: 'obec/publicholiday'},
    {args: 'obec/school'},
    {args: 'obec/stat_attendance'},
    {args: 'obec/stat_attendance_child'},
    {args: 'obec/stat_schools_attendance'},
    {args: 'obec/student_data_db'},
    {args: 'obec/studenthouse_location_db'},
    {args: 'obec/students_care'},
    {args: 'obec/teacher_db'},
    {args: 'obec/weightheight'},
    {args: 'oosc/oosc_assignhost'},
    {args: 'oosc/oosc_assignment'},
    {args: 'oosc/oosc_child'},
    {args: 'oosc/oosc_city'},
    {args: 'oosc/oosc_form'},
    {args: 'oosc/oosc_form_v2'},
    {args: 'oosc/oosc_plan'},
    {args: 'oosc/oosc_province'},
    {args: 'oosc/oosc_tumbon'},
    {args: 'oosc/oosc_village'},
    {args: 'qinfo/activity'},
    {args: 'qinfo/attendance'},
    {args: 'qinfo/desirecharacteristicdata'},
    {args: 'qinfo/examratio'},
    {args: 'qinfo/gpadata'},
    {args: 'qinfo/hostconfig'},
    {args: 'qinfo/hostsystem'},
    {args: 'qinfo/knowledgestructure'},
    {args: 'qinfo/newindicator'},
    {args: 'qinfo/readthinkwritedata'},
    {args: 'qinfo/subject_attendance'}
  ];

  tests.forEach(function(test) {
    it('should get data from /'+test.args,function(done) {
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
