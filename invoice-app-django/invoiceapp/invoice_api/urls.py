from django.urls import path
from .views import InvoiceItem, InvoiceList

urlpatterns = [
    path('', InvoiceList.as_view(), name="allInvoices"),
    path('newInvoice', InvoiceList.as_view(), name="addInvoice"),
    path(':id/deleteInvoice', InvoiceItem.as_view(), name="deleteInvoice"),
    path(':id/editInvoice', InvoiceItem.as_view(), name="editInvoice"),

    path(':id', InvoiceItem.as_view(), name="readInvoiceItem"),
    path(':id/newItem', InvoiceItem.as_view(), name="addInvoiceItem"),
    path(':id/editItem', InvoiceItem.as_view(), name="editInvoiceItem"),
    path(':id/deleteItem', InvoiceItem.as_view(), name="deleteInvoiceItem"),
]