// store.ts

import { defineStore } from 'pinia';
import { get, post, del } from '@/service/apiService';
import Swal from 'sweetalert2';
import validationSchema from '@/schemas/validationSchema';

export default interface Property {
  id: number|null;
  address: string;
  description: string;
  price: number;
  status: 'Available' | 'Sold' | 'Under Contract';
}

interface PropertyFormErrors {
  address: string;
  description: string;
  price: string;
  status: string;
}

const initialProperty = {
  address: '',
  description: '',
  price: 0,
  status: 'Available',
};

export const useStore = defineStore('store', {
  state: () => ({
    properties: [] as Property[],
    newProperty: {
      address: '',
      description: '',
      price: 0,
      status: 'Available',
    } as Property,
    propertyFormErrors: {}  as PropertyFormErrors, // Store validation errors
    selectedProperty: {} as Property,
  }),
  actions: {
    validateProperty() {
      // Perform validation using Yup schema
      try {
        validationSchema.validateSync(this.newProperty, { abortEarly: false });
        this.propertyFormErrors = {} as PropertyFormErrors;
        return true; // Return true if validation succeeds
      } catch (validationErrors: any) {
          const tempErrors: PropertyFormErrors = {} as PropertyFormErrors;
          validationErrors.inner.forEach((err:any) => {
            tempErrors[err.path as keyof PropertyFormErrors] = err.message;
          }); 
          this.propertyFormErrors = tempErrors;
        
        return false; // Return false if validation fails
      }
    },

    async fetchProperties() {
      try {
        const data = await get<Property[]>('/properties');
        this.properties = data;

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Failed to fetch properties',
          text: 'An error occurred while fetching properties. Please try again later.',
        });
        console.error('Failed to fetch properties:', error);
      }
    },
    async addProperty() {

      const isValid = this.validateProperty();
      if (!isValid) {
        return; // Do not proceed if there are validation errors
      }


      try {
        const property = this.$state.newProperty;
        
        const data = await post<Property>('/properties', property);
        this.properties.push(data);
        this.resetSelectedProperty();
        Swal.fire({
          icon: 'success',
          title: 'Property added/edited successfully',
          text: 'The property has been added/edited successfully.',
        }).then(() => {
          window.location.href = '/';
        });

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Failed to add property',
          text: 'An error occurred while adding the property. Please try again later.',
        });
        console.error('Failed to add property:', error);
      }
    },
    async deleteProperty(id: number) {
      
       
      await Swal.fire({
        icon: "warning",
        title: 'You confirm to delete this property?',
        text: 'You are about to delete a property.',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
          await del<Property>('/properties/'+id);
            this.properties = this.properties.filter(property => property.id !== id);
            Swal.fire({
              icon: 'success',
              title: 'Property deleted successfully',
              text: 'The property has been deleted successfully.',
            });
          }catch (error) {
            console.error('Failed to delete property:', error);
            Swal.fire({
              icon: 'error',
              title: 'Failed to delete property',
              text: 'An error occurred while deleting the property. Please try again later.',
            });
          }
        }});
    },
    
    setSelectedProperty(property: Property) {
      this.selectedProperty = property;
    },

    handleSelectedPropertyOnEdit() {
      Object.values(this.selectedProperty).length > 0 ? (this.newProperty = this.selectedProperty) :  (this.newProperty = initialProperty as Property) ;
    },

    resetSelectedProperty() {
      this.selectedProperty = {} as Property;
      this.newProperty = initialProperty as Property;
    }
  },
});
