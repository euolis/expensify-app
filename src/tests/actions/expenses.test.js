import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should generate remove expense action object', () => {
    const action = removeExpense({ id: 123 });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 123
    });
});

test('should generate edit expense action object', () => {
    const action = editExpense(
        123,
        {
            description: 'Gas Bill',
            amount: 500
        }
    );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: {
            description: 'Gas Bill',
            amount: 500
        }
    });
});

test('should generate add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should generate add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
