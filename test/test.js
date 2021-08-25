'use strict';

const should = require('chai').should();
const expect = require('chai').expect;
const moneris = require('../index')({});

it('Empty Parameters', (done) => {
	moneris.send({}).then((v) => {
		done('Should Error out');
	}).catch((e) => {
		expect(e).to.be.instanceof(TypeError);
		done();
	});
});

it('invalid country code parameters', done => {
	moneris.send({type: 'purchase'}).catch((e) => {
		expect(e).to.be.instanceof(TypeError);
		done();
	});
});