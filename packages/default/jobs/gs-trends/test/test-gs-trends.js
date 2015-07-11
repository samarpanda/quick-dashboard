/**
 * Test file for Job: gs-trends
 */

var assert = require ('assert');
gs-trendsSUT = require('../gs-trends');

var mockedConfig, mockedDependencies;

describe ('gs-trends test', function(){

  beforeEach(function (done) {
    
    // you may probably need a mocked configuration object like this to unit test configuration
    // parameter check
    mockedConfig = {
      globalAuth: {
        myconfigKey: {
          username: "myusername",
          password: "secretpassword"
        }
      },
      interval: 20000
    };

    // mocking easyRequest in order to unit test this job (check the test below)
    mockedDependencies = {
      logger: console,
      easyRequest : {
        JSON : function (options, cb) {
          cb(null, {});
        }
      }
    };

    done();
  });

  it('should have tests :D', function (done){
    assert.ok(false, 'we don\'t have any tests :(');
    done();
  });

  describe ('config checks', function(){
    it('should check for valid credentials', function (done){
      // there are some nice examples of how to unit tests configuration handling
      // in the Atlassian package:
      // https://bitbucket.org/atlassian/atlasboard-atlassian-package/src/master/jobs
      done();
    });
  });

  describe ('http request example tests', function(){
    it('should handle server errors', function (done){

      mockedDependencies.easyRequest.HTML = function (options, cb){
        cb(null, 'hello from google');
      };

      var config = {};
      gs-trendsSUT(config, mockedDependencies, function(err, data){
        assert.equal('hello from google', data.html, 'expected reply from goodle but got ' + data.html);
        done();
      });
    });
  });

});
