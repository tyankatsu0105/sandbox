import React, { FunctionComponent, useMemo } from 'react';

import {
  TextField,
  Grid,
  MenuItem,
  Button,
  Box,
  CircularProgress,
} from '@material-ui/core';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useSnackbar, useLoading } from '@sandbox-react-apollo/hooks';

import {
  UpdateLocalStateDemoEditMutationFn,
  UpdateLocalStateDemoEditMutationVariables,
  LocalStateDemoQuery,
  BloodTypes,
} from '~client/graphql/__generated__/schema';

import { ContentsLoader } from '@sandbox-react-apollo/components';

const validationSchema = Yup.object<
  UpdateLocalStateDemoEditMutationVariables['input']
>({
  name: Yup.string(),
  age: Yup.number(),
  blood: Yup.string(),
});

type Props = {
  data: LocalStateDemoQuery;
  updateYou: UpdateLocalStateDemoEditMutationFn;
  loading: boolean;
};

type FormValue = Yup.InferType<typeof validationSchema>;

export const LocalStateDemoEditPresentational: FunctionComponent<Props> = (
  props
) => {
  const { showSnackbar } = useSnackbar<'withDetails'>({
    type: 'withDetails',
  });
  const { loading, startLoading, finishLoading } = useLoading({
    loading: props.loading,
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<FormValue>({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      name: props.data.you.name,
      age: props.data.you.age,
      blood: props.data.you.blood,
    },
    onSubmit: async (values) => {
      await finishLoading();

      const input = values;
      props.updateYou({ variables: { input } });

      showSnackbar({
        message: '更新完了しました',
        details: `local stateの値を更新しました`,
        variant: 'success',
      });
    },
  });
  const bloodTypes = useMemo(() => Object.values(BloodTypes), []);
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <TextField
            name="name"
            value={values.name}
            label="名前"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            name="age"
            value={values.age}
            label="年齢"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            error={!!errors.age}
            helperText={errors.age}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            name="blood"
            value={values.blood}
            label="血液型"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            error={!!errors.blood}
            helperText={errors.blood}
          >
            {bloodTypes.map((bloodType) => (
              <MenuItem key={bloodType} value={bloodType}>
                {bloodType}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Box marginTop={1}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid}
          onClick={startLoading}
        >
          更新
        </Button>
        <ContentsLoader loading={loading} />
      </Box>
    </form>
  );
};
