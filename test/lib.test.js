import { assert, expect } from 'chai'
import 'chai/register-should'
import { lib } from '../'

describe('lib', function() {
  describe('lib.add()', function() {
    it('tdd style', function() {
      assert.equal(lib.add(1, 2), 3)
    })

    it('bdd style', function() {
      expect(lib.add(1, 2)).to.equal(3)
    })

    it('bdd should style', function () {
      lib.add(1, 2).should.equal(3)
    })
  })
})
