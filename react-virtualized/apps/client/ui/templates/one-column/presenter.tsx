import * as React from 'react';
import styled from 'styled-components';

import * as ApplicationUtils from '~client/application/utils';
import * as Shared from '~client/shared';
import * as Atoms from '~client/ui/atoms';
import * as Components from '~client/ui/components';
// ----------------------------------------
// helpers
// ----------------------------------------

const options = Array.from({ length: 1000 }).map((_, index) => ({
  label: `list-${index}`,
  value: index.toString(),
}));

// ----------------------------------------
// props
// ----------------------------------------

// ----------------------------------------
// component
// ----------------------------------------

export const Component: React.VFC = () => {
  const [selectSingleValues, setSelectSingleValues] = React.useState<string[]>(
    []
  );
  const [selectedOptionsMultiple, setSelectedOptionsMultiple] = React.useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const [selectSingleIsError, setSelectSingleIsError] = React.useState<boolean>(
    false
  );
  const [selectMultipleIsError, setSelectMultipleIsError] = React.useState<
    boolean
  >(false);

  const [selectSingleIsDisabled, setSelectSingleIsDisabled] = React.useState<
    boolean
  >(false);
  const [
    selectMultipleIsDisabled,
    setSelectMultipleIsDisabled,
  ] = React.useState<boolean>(false);

  const handleChangeSingleValue: Components.SelectSingle.ChangeHandler = React.useCallback(
    (values) => {
      setSelectSingleValues([...values]);
    },
    [setSelectSingleValues]
  );
  const handleChangeMultipleValue: Components.SelectMultiple.ChangeHandler = React.useCallback(
    (options) => {
      if (
        selectedOptionsMultiple.some(
          (selectedOptionMultiple) =>
            selectedOptionMultiple.value === options[0].value
        )
      ) {
        setSelectedOptionsMultiple(
          selectedOptionsMultiple.filter(
            (selectedOptionMultiple) =>
              selectedOptionMultiple.value !== options[0].value
          )
        );
      } else {
        setSelectedOptionsMultiple([...selectedOptionsMultiple, options[0]]);
      }
    },
    [setSelectedOptionsMultiple, selectedOptionsMultiple]
  );
  const handleChangeMultipleValueRemove: Components.SelectMultiple.ChangeHandler = React.useCallback(
    (options) => {
      setSelectedOptionsMultiple(
        selectedOptionsMultiple.filter(
          (selectedOptionMultiple) =>
            selectedOptionMultiple.value !== options[0].value
        )
      );
    },
    [selectedOptionsMultiple, setSelectedOptionsMultiple]
  );

  const handleSingleErrorChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectSingleIsError(event.target.checked);
    },
    [setSelectSingleIsError]
  );
  const handleMultipleErrorChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectMultipleIsError(event.target.checked);
    },
    [setSelectMultipleIsError]
  );

  const handleSingleDisabledChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectSingleIsDisabled(event.target.checked);
    },
    [setSelectSingleIsDisabled]
  );
  const handleMultipleDisabledChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectMultipleIsDisabled(event.target.checked);
    },
    [setSelectMultipleIsDisabled]
  );

  const handleClickResetSingleValue = React.useCallback(() => {
    handleChangeSingleValue([]);
    setSelectSingleValues([]);
  }, [setSelectSingleValues, handleChangeSingleValue]);
  const handleClickResetMultipleValue = React.useCallback(() => {
    handleChangeMultipleValue([]);
    setSelectedOptionsMultiple([]);
  }, [setSelectedOptionsMultiple, handleChangeMultipleValue]);

  const handleEnterResetSingleValue = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      Shared.Utils.Keys.keyDownHandler({
        callback: () => {
          handleChangeSingleValue([]);
          setSelectSingleValues([]);
        },
        event,
        key: ApplicationUtils.Key.key.Enter,
      });
    },
    [setSelectSingleValues, handleChangeSingleValue]
  );
  const handleEnterResetMultipleValue = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      Shared.Utils.Keys.keyDownHandler({
        callback: () => {
          handleChangeMultipleValue([]);
          setSelectedOptionsMultiple([]);
        },
        event,
        key: ApplicationUtils.Key.key.Enter,
      });
    },
    [setSelectedOptionsMultiple, handleChangeMultipleValue]
  );

  return (
    <Wrapper>
      <Section>
        <Atoms.Heading.Component headingLevel="h2">
          Select single
        </Atoms.Heading.Component>
        <CheckBoxListWrap>
          <CheckBoxItemLabel htmlFor="single-error">
            <CheckBox
              id="single-error"
              name="single-error"
              onChange={handleSingleErrorChange}
              type="checkbox"
            />
            error
          </CheckBoxItemLabel>
          <CheckBoxItemLabel htmlFor="single-disable">
            <CheckBox
              id="single-disable"
              name="single-disable"
              onChange={handleSingleDisabledChange}
              type="checkbox"
            />
            disabled
          </CheckBoxItemLabel>
        </CheckBoxListWrap>
        <Components.SelectSingle.Component
          disabled={selectSingleIsDisabled}
          errorMessage={'error!!!!!!!'}
          inputProps={{
            id: 'single-select',
            name: 'single-select',
          }}
          isError={selectSingleIsError}
          onChange={handleChangeSingleValue}
          options={options}
          values={selectSingleValues}
          valuesUpdateHandler={setSelectSingleValues}
        />
        <ButtonWrap>
          <Button
            onClick={handleClickResetSingleValue}
            onKeyDown={handleEnterResetSingleValue}
            type="button"
          >
            clear
          </Button>
        </ButtonWrap>
        values: {JSON.stringify(selectSingleValues, null, 2)}
      </Section>
      <Section>
        <Atoms.Heading.Component headingLevel="h2">
          Select multiple
        </Atoms.Heading.Component>
        <CheckBoxListWrap>
          <CheckBoxItemLabel htmlFor="multiple-error">
            <CheckBox
              id="multiple-error"
              name="multiple-error"
              onChange={handleMultipleErrorChange}
              type="checkbox"
            />
            error
          </CheckBoxItemLabel>
          <CheckBoxItemLabel htmlFor="multiple-disable">
            <CheckBox
              id="multiple-disable"
              name="multiple-disable"
              onChange={handleMultipleDisabledChange}
              type="checkbox"
            />
            disabled
          </CheckBoxItemLabel>
        </CheckBoxListWrap>
        <Components.SelectMultiple.Component
          disabled={selectMultipleIsDisabled}
          errorMessage={'error!!!!!!!'}
          inputProps={{
            id: 'multiple-select',
            name: 'multiple-select',
          }}
          isError={selectMultipleIsError}
          onChange={handleChangeMultipleValue}
          onChangeRemove={handleChangeMultipleValueRemove}
          options={options}
        />
        <ButtonWrap>
          <Button
            onClick={handleClickResetMultipleValue}
            onKeyDown={handleEnterResetMultipleValue}
            type="button"
          >
            clear
          </Button>
        </ButtonWrap>
        values: {JSON.stringify(selectedOptionsMultiple, null, 2)}
      </Section>
    </Wrapper>
  );
};

// ----------------------------------------
// styles
// ----------------------------------------
const Wrapper = styled.main`
  padding: ${(props) => props.theme.spacer(2)};
`;

const Section = styled.section`
  & + & {
    margin-top: ${(props) => props.theme.spacer(5)};
  }
`;

const CheckBoxListWrap = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacer(2)};
`;
const CheckBoxItemLabel = styled.label`
  font-size: 1rem;
`;
const CheckBox = styled.input``;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.spacer(2)};
`;
const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.common.white};
  border: 1px solid ${(props) => props.theme.colors.common.black};
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  padding: ${(props) => props.theme.spacer(2)}
    ${(props) => props.theme.spacer(3)};
`;
