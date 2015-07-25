/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	cp = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'travis.yml', function tests() {

	it( 'should export a function', function test() {
		expect( cp ).to.be.a( 'function' );
	});

	it( 'should export a function for creating a travis.yml file synchronously', function test() {
		expect( cp.sync ).to.be.a( 'function' );
	});

});
