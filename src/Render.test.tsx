import React from 'react';
import {render, screen} from '@testing-library/react'
import Render from './Render';

describe('Rendering', () => {
    it('should ',  () => {
        render(<Render />);
        expect(screen.getByRole('heading')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        expect(screen.getAllByRole('button')[0]).toBeTruthy(); 
        expect(screen.queryByText('Udemy')).toBeTruthy();
        expect(screen.queryByText('Udeeeemy')).toBeFalsy();
    });
});