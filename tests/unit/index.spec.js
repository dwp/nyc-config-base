const nycConfig = require('../../src/index');

describe('@dwp/nyc-config-default', () => {
    it('the entrypoint should export an object', () => {
        expect(nycConfig).toEqual(jasmine.any(Object));
    });

    describe('the exported object should', () => {
        it('have an all key', () => {
            expect(Object.keys(nycConfig)).toContain('all');
        });

        it('have a branches key', () => {
            expect(Object.keys(nycConfig)).toContain('branches');
        });

        it('have a cache key', () => {
            expect(Object.keys(nycConfig)).toContain('cache');
        });

        it('have a check-coverage key', () => {
            expect(Object.keys(nycConfig)).toContain('check-coverage');
        });

        it('have an exclude key', () => {
            expect(Object.keys(nycConfig)).toContain('exclude');
        });

        it('have a functions key', () => {
            expect(Object.keys(nycConfig)).toContain('functions');
        });

        it('have an include key', () => {
            expect(Object.keys(nycConfig)).toContain('include');
        });

        it('have a lines key', () => {
            expect(Object.keys(nycConfig)).toContain('lines');
        });

        it('have a per-file key', () => {
            expect(Object.keys(nycConfig)).toContain('per-file');
        });

        it('have a produce-source-map key', () => {
            expect(Object.keys(nycConfig)).toContain('produce-source-map');
        });

        it('have a report-dir key', () => {
            expect(Object.keys(nycConfig)).toContain('report-dir');
        });

        it('have a reporter key', () => {
            expect(Object.keys(nycConfig)).toContain('reporter');
        });

        it('have a statements key', () => {
            expect(Object.keys(nycConfig)).toContain('statements');
        });

        it('have a watermarks key', () => {
            expect(Object.keys(nycConfig)).toContain('watermarks');
        });

        it('not have any other keys', () => {
            expect(Object.keys(nycConfig)).toEqual([ 'all', 'branches', 'cache', 'check-coverage', 'exclude', 'functions', 'include', 'lines', 'per-file', 'produce-source-map', 'report-dir', 'reporter', 'statements', 'watermarks' ]);
        });

        describe('the exclude key should', () => {
            const rule = nycConfig.exclude;

            it('exclude all node_modules folders', () => {
                expect(rule).toContain('node_modules/**');
            });

            it('exclude tests', () => {
                expect(rule).toContain('tests/**');
            });

            it('excludes commitlint.config.js', () => {
                expect(rule).toContain('commitlint.config.js');
            });

            it('should not exclude anything else', () => {
                expect(rule).toEqual([ 'node_modules/**', 'tests/**', 'commitlint.config.js' ]);
            });
        });

        describe('the include key should', () => {
            const rule = nycConfig.include;

            it('include all javascript files', () => {
                expect(rule).toContain('**/*.js');
            });

            it('not include anything else', () => {
                expect(rule).toEqual([ '**/*.js' ]);
            });
        });

        describe('the reporter key should', () => {
            const rule = nycConfig.reporter;

            it('provide a text summary', () => {
                expect(rule).toContain('lcov');
            });

            it('provide code coverage', () => {
                expect(rule).toContain('text-summary');
            });

            it('should not provide any other reports', () => {
                expect(rule).toEqual([ 'lcov', 'text-summary' ]);
            });
        });

        describe('the watermarks key should', () => {
            const rule = nycConfig.watermarks;

            it('be an object', () => {
                expect(rule).toEqual(jasmine.any(Object));
            });

            it('have a branches key', () => {
                expect(Object.keys(rule)).toContain('branches');
            });

            it('have a functions key', () => {
                expect(Object.keys(rule)).toContain('functions');
            });

            it('have a lines key', () => {
                expect(Object.keys(rule)).toContain('lines');
            });

            it('have a statements key', () => {
                expect(Object.keys(rule)).toContain('statements');
            });

            it('not have any other keys', () => {
                expect(Object.keys(rule)).toEqual([ 'branches', 'functions', 'lines', 'statements' ]);
            });
        });
    });
});
