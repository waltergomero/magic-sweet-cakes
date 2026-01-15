'use client';

import { useState } from 'react';
import { Trash2, Edit2, Plus, DollarSign, Euro } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

export default function AdminDashboard() {
  const [usdCategories, setUsdCategories] = useState<Category[]>([
    { id: '1', name: 'Cakes' },
    { id: '2', name: 'Pastries' },
    { id: '3', name: 'Cookies' },
  ]);

  const [eurCategories, setEurCategories] = useState<Category[]>([
    { id: '1', name: 'Cakes' },
    { id: '2', name: 'Pastries' },
    { id: '3', name: 'Cookies' },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [newCategoryUSD, setNewCategoryUSD] = useState('');
  const [newCategoryEUR, setNewCategoryEUR] = useState('');

  const addCategory = (currency: 'USD' | 'EUR') => {
    const newCategory = currency === 'USD' ? newCategoryUSD : newCategoryEUR;
    if (newCategory.trim() === '') return;

    const category: Category = {
      id: Date.now().toString(),
      name: newCategory,
    };

    if (currency === 'USD') {
      setUsdCategories([...usdCategories, category]);
      setNewCategoryUSD('');
    } else {
      setEurCategories([...eurCategories, category]);
      setNewCategoryEUR('');
    }
  };

  const deleteCategory = (id: string, currency: 'USD' | 'EUR') => {
    if (currency === 'USD') {
      setUsdCategories(usdCategories.filter(cat => cat.id !== id));
    } else {
      setEurCategories(eurCategories.filter(cat => cat.id !== id));
    }
  };

  const startEdit = (id: string, name: string) => {
    setEditingId(id);
    setEditValue(name);
  };

  const saveEdit = (id: string, currency: 'USD' | 'EUR') => {
    if (editValue.trim() === '') return;

    if (currency === 'USD') {
      setUsdCategories(usdCategories.map(cat =>
        cat.id === id ? { ...cat, name: editValue } : cat
      ));
    } else {
      setEurCategories(eurCategories.map(cat =>
        cat.id === id ? { ...cat, name: editValue } : cat
      ));
    }
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div className="admin-container">
      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-dashboard-grid">
          {/* USD Account Card */}
          <div className="admin-card">
            <div className="admin-card-header">
              <div className="admin-currency-badge">
                <DollarSign size={24} color="#14b8a6" />
                <h2 className="admin-card-title">USD Account</h2>
              </div>
              <span className="admin-category-count">{usdCategories.length} categories</span>
            </div>

            <div className="admin-card-body">
              {/* Add Category Input */}
              <div className="admin-add-section">
                <label htmlFor="usd-category-input" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                  Add new USD category
                </label>
                <input
                  id="usd-category-input"
                  type="text"
                  placeholder="Add new category..."
                  value={newCategoryUSD}
                  onChange={(e) => setNewCategoryUSD(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCategory('USD')}
                  className="admin-input"
                />
                <button
                  onClick={() => addCategory('USD')}
                  className="admin-add-button"
                  aria-label="Add category"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Categories List */}
              <div className="admin-category-list">
                {usdCategories.map((category) => (
                  <div key={category.id} className="admin-category-item">
                    {editingId === category.id ? (
                      <>
                        <label htmlFor={`edit-${category.id}`} style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
                          Edit category name
                        </label>
                        <input
                          id={`edit-${category.id}`}
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && saveEdit(category.id, 'USD')}
                          onBlur={() => saveEdit(category.id, 'USD')}
                          className="admin-edit-input"
                          autoFocus
                        />
                      </>
                    ) : (
                      <span className="admin-category-name">{category.name}</span>
                    )}
                    <div className="admin-action-buttons">
                      <button
                        onClick={() => startEdit(category.id, category.name)}
                        className="admin-icon-button"
                        title="Edit"
                        aria-label="Edit category"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => deleteCategory(category.id, 'USD')}
                        className="admin-icon-button admin-delete-button"
                        title="Delete"
                        aria-label="Delete category"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
