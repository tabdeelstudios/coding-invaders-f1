import uuid
from django.db import models

# Create your models here.

# Invoice Model -> id (UUID), createdAt (current time), updatedAt (current time), title (Char Field), invoiceStatus (Boolead Value), totalAmount (Number), clientName (Char Field)

# db_name -> invoices
# ordering -> '-updatedAt'

class Invoice(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    status = models.BooleanField(default=False)
    totalAmount = models.DecimalField(decimal_places=2)
    clientName = models.CharField(max_length=255)

    class Meta:
        db_table = 'invoices'
        ordering = ['-updatedAt']

    def __str__(self) -> str:
        return self.title
    

# Invoice Item -> id (UUDI), createdAt (Current Time), updatedAt (Current Time), rate (Number), quantity (Number), description (Text)
class InvoiceItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    rate = models.DecimalField(decimal_places=2)
    quantity = models.IntegerField()

    class Meta:
        db_table = 'items'
        ordering = ['-updatedAt']

    def __str__(self) -> str:
        return self.description