const expect = require('chai').expect
const sinon = require('sinon')

const index = require('../src/index')
const dependency = require('../src/dependency')

describe('mocking dependency', function() {
  let mock_dependency

  beforeEach(function() {
    mock_dependency = sinon.stub(dependency, 'method').returns('called fake method one')
  })

  afterEach(function() {
    dependency.method.restore()
  })

  it('calls fake methods', function() {
    expect(index()).to.deep.equal('called fake method one')

    expect(mock_dependency.calledOnce).to.equal(true)
  })

})