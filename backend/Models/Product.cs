using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Product
{
    public int Id { get; set; }

    public string Titre { get; set; } = null!;

    public string? Description { get; set; }

    public double Prix { get; set; }

    public string Categorie { get; set; } = null!;

    public int Stock { get; set; }

    public string? Image { get; set; }
}
