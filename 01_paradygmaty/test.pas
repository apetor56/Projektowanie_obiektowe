program testy;

uses paradygmaty;

procedure assertEqual(var inputData: array of Integer; const expectedResult: array of Integer);
var arrayIndex: Integer;
begin
	for arrayIndex := Low(inputData) to High(inputData) do
		if inputData[arrayIndex] <> expectedResult[arrayIndex] then
		begin
			WriteLn('assetion failed: array is not sorted properly');
			exit;
		end;

	WriteLn('assertion succeded: array is sorted properly');
	WriteLn('');
end;

procedure testSortRandomArray();
var arrayToSort: array[1..6] of Integer = (5, 3, 2, 4, 1, 0);
const expectedResult: array[1..6] of Integer = (0, 1, 2, 3, 4, 5);
begin
	WriteLn('Test: sort unsorted array');
	sort(arrayToSort);
	assertEqual(arrayToSort, expectedResult);
end;

procedure testSortSortedArray();
var arrayToSort: array[1..6] of Integer = (-10, -5, -3, 7, 11, 15);
const expectedResult: array[1..6] of Integer = (-10, -5, -3, 7, 11, 15);
begin
	WriteLn('Test: sort sorted array');
	sort(arrayToSort);
	assertEqual(arrayToSort, expectedResult);
end;

procedure testSortReversedArray();
var arrayToSort: array[1..6] of Integer = (34, 16, 5, -3, -11, -28);
const expectedResult: array[1..6] of Integer = (-28, -11, -3, 5, 16, 34);
begin
        WriteLn('Test: sort reversed array');
        sort(arrayToSort);
        assertEqual(arrayToSort, expectedResult);
end;

procedure testNegativeRangeGeneration();
var
	randomNumbers: array[1..100] of Integer;
	min, max: Integer;
const
	first: Integer = -80;
	last: Integer = -30;
begin
	WriteLn('Test: check negative range generation');
	generateRandomNumbers(first, last, randomNumbers);
	sort(randomNumbers);
	min := randomNumbers[Low(randomNumbers)];
	max := randomNumbers[High(randomNumbers)];

	if (min >= first) and (min <= last) and (max <= last) and (max >= first) then
		WriteLn('success: numbers are generated in given negative range')
	else
		WriteLn('failure: numbers are not generated in given range');
	WriteLn('');
end;

procedure testWrongRangeGeneration();
var randomNumbers: array[1..100] of Integer;
const
	first: Integer = 100;
	last: Integer = 30;
	unchangedValue: Integer = -100;
begin
	WriteLn('Test: check wrong range handling');
	randomNumbers[1] := unchangedValue;
	generateRandomNumbers(first, last, randomNumbers);

	if randomNumbers[1] = unchangedValue then
		WriteLn('success: procedure exit after wrong range check')
	else
		WriteLn('failure: procedure should exit after wrong range check');
	WriteLn('');
end;

begin
	testSortRandomArray();
	testSortSortedArray();
	testSortReversedArray();
	testNegativeRangeGeneration();
	testWrongRangeGeneration();
end.

