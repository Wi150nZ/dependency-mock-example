const expect = require('chai').expect
const sinon = require('sinon')

const index = require('../src/index')

describe('mocking dependencies', function() {
  let mocked_index_one
  let mocked_index_two

  beforeEach(function() {
    mocked_index_one = sinon.stub(index, 'method_one').returns('called fake method one')
    mocked_index_two = sinon.stub(index, 'method_two').returns('called fake method two')
  })

  afterEach(function() {
    mocked_index_one.restore()
    mocked_index_two.restore()
  })

  it('calls fake methods', function() {
    expect(index.method_one()).to.deep.equal('called fake method one')
    expect(index.method_two()).to.deep.equal('called fake method two')
  })

})