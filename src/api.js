import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useSaleOrders = () => {
  return useQuery('saleOrders', async () => {
    const response = await fetch('/api/saleOrders');
    return response.json();
  });
};

export const useCreateSaleOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(
    newOrder => fetch('/api/saleOrders', {
      method: 'POST',
      body: JSON.stringify(newOrder),
    }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('saleOrders');
      },
    }
  );
};