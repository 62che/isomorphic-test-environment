import { assert, expect } from 'chai'
import 'chai/register-should'
import * as lib from '../src/lib'

describe('lib', function (): void {
  describe('lib.add()', function (): void {
    it('tdd style', function (): void {
      assert.equal(lib.add(1, 2), 3)
    })

    it('bdd expect style', function (): void {
      expect(lib.add(1, 2)).to.equal(3)
    })

    it('bdd should style', function (): void {
      lib.add(1, 2).should.equal(3)
    })
  })
})
