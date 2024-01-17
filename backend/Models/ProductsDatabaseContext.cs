using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class ProductsDatabaseContext : DbContext
{
    public ProductsDatabaseContext()
    {
    }

    public ProductsDatabaseContext(DbContextOptions<ProductsDatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.ToTable("products");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Categorie).HasColumnName("categorie");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Image).HasColumnName("image");
            entity.Property(e => e.Prix).HasColumnName("prix");
            entity.Property(e => e.Stock).HasColumnName("stock");
            entity.Property(e => e.Titre).HasColumnName("titre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
