import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Home from './Home'
import { READ_TODOS } from './Graphql';

const todos = [
    {
      request: {
        query: READ_TODOS
      },
      result: {
        data: {
          todos: [
                { id: "1", text: 'React', completed: true },
                { id: "2", text: 'Apollo', completed: false }
            ]
        }
      }
    },
    {
        request: {
            query: READ_TODOS
        },
        error: new Error("Something went wrong")
    }    
]


describe("test", () => {
    test('fetch todos from API and display them', async () => {
        const component = render(
            <MockedProvider mocks={[todos]} addTypename={false}>
                <Home />
            </MockedProvider>
        );

        await new Promise(resolve => setTimeout(resolve, 0));
        const tree = component.toJSON();
        // expect(tree.children).toContain('Loading...');
        await screen.debug()
    });

    // test('adds a new to-do', () => {
    //     render(
    //         <MockedProvider mocks={mocks}>
    //             <Home />
    //         </MockedProvider>
    //     );
    //     screen.debug()
    // });
})