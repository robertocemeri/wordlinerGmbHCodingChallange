// validationSchema.ts
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required').positive('Price must be a positive number'),
  status: Yup.string().required('Status is required').oneOf(['Available', 'Sold', 'Under Contract'], 'Invalid status'),
});

export default validationSchema;
