/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';

describe('when command is not success with failed callback', () => {
    let context: any = new a_command_custom_attribute();

    (beforeEach(() => {
        context.commandResult.success = false;
        context.attribute.success = sinon.stub();
        context.attribute.failed = sinon.stub();
        context.element.onclick();
    }));

    it('should call failed callback with command result', () => context.attribute.failed.calledWith({commandResult: context.commandResult}).should.be.true);
    it('should not call success callback with command result', () => context.attribute.success.called.should.be.false);
});

